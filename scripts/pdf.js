const { chromium } = require("playwright");
const { execFileSync } = require("node:child_process");
const { unlinkSync } = require("node:fs");

const portfolioUrl = "https://ahndev.netlify.app";

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 900,
    },
    deviceScaleFactor: 1,
  });

  // Framer Motion의 reduced motion 설정 유도
  await page.emulateMedia({
    media: "screen",
    reducedMotion: "reduce",
  });

  await page.goto(portfolioUrl, {
    waitUntil: "networkidle",
  });

  // whileInView 애니메이션을 실행하기 위해 페이지 끝까지 스크롤
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let currentPosition = 0;
      const scrollStep = 700;

      const timer = setInterval(() => {
        window.scrollBy(0, scrollStep);
        currentPosition += scrollStep;

        if (currentPosition >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  // 애니메이션과 이미지 렌더링 대기
  await page.waitForTimeout(1500);

  // CSS 애니메이션 및 transition 강제 종료
  await page.addStyleTag({
    content: `
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }

      html {
        scroll-behavior: auto !important;
      }

      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      /* 긴 단일 페이지를 인쇄할 때 100vh가 PDF 전체 높이가 되는 것을 막는다. */
      @media print {
        [class*="min-h-screen"] {
          min-height: 900px !important;
          height: 900px !important;
        }
      }
    `,
  });

  // 현재 실행 중인 Web Animation API 애니메이션을 마지막 상태로 이동
  await page.evaluate(() => {
    document.getAnimations().forEach((animation) => {
      try {
        animation.finish();
      } catch {
        animation.cancel();
      }
    });
  });

  // PDF 인쇄 레이아웃은 긴 페이지를 나누므로, 전체 화면을 한 장의 이미지로 캡처한다.
  const screenshotPath = "portfolio.png";
  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
  });

  await browser.close();

  // macOS 기본 도구로 이미지 한 장을 PDF 한 페이지로 변환한다.
  execFileSync("sips", ["-s", "format", "pdf", screenshotPath, "--out", "portfolio.pdf"]);
  unlinkSync(screenshotPath);
  console.log("portfolio.pdf 생성 완료");
})();

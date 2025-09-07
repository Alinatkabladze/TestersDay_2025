module.exports = async (page, scenario) => {
  console.log('🟡 Running custom onReadyScript: clicking cookie accept...');

  try {
    await page.waitForSelector("//a[@id='saveCookieConsent']//following::a[@id='acceptAllCookies'][2]", { timeout: 30000 });
    await page.click("//a[@id='saveCookieConsent']//following::a[@id='acceptAllCookies'][2]");
    console.log('✅ Cookie banner accepted');

    // 🧽 Hide the cookie component after accepting
    await page.evaluate(() => {
      const cookiePopup = document.querySelector('.cookie-side-window');
      if (cookiePopup) {
        cookiePopup.style.display = 'none';
        console.log('🧼 Cookie popup hidden');
      }
    });

  } catch (e) {
    console.log('⚠️ Cookie banner not found or already accepted');
  }
};

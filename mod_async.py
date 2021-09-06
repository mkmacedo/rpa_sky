
import asyncio
from playwright.async_api import Playwright, async_playwright
async def run(playwright: Playwright) -> None:
    browser = await playwright.chromium.launch(headless=False)
    context = await browser.new_context()
    # Open new page
    page = await context.new_page()
    # Go to https://mecsas-saude.appspot.com/login
    await page.goto("https://mecsas-saude.appspot.com/login")
    # Click text=usuario@email.com.br
    await page.click("text=usuario@email.com.br")
    # Click input[name="email"]
    await page.click("input[name=\"email\"]")
    # Click input[name="email"]
    await page.click("input[name=\"email\"]")
    # Fill input[name="email"]
    await page.fill("input[name=\"email\"]", "rh@connectcom.com.br")
    # Click text=Senha
    await page.click("text=Senha")
    # Fill input[name="senhaLogin"]
    await page.fill("input[name=\"senhaLogin\"]", "conne@2021")
    # Click text=Acessar
    await page.click("text=Acessar")
    # assert page.url == "https://mecsas-saude.appspot.com/home"
    # Click text=bottomMiddle
    await page.click("text=bottomMiddle")
    # assert page.url == "https://mecsas-saude.appspot.com/beneficiarios/consultar"
    # Click #mascara-17344019715156223 #mascara
    await page.click("#mascara-17344019715156223 #mascara")
    # Click #mascara-17344019715156223 #mascara
    await page.click("#mascara-17344019715156223 #mascara")
    # Click #mascara-17344019715156223 #mascara
    await page.click("#mascara-17344019715156223 #mascara")
    # Click #mascara-17344019715156223 #mascara
    await page.click("#mascara-17344019715156223 #mascara")
    # Click #mascara-17344019715156223 #mascara
    await page.click("#mascara-17344019715156223 #mascara", button="right")
    # Click text=Ocorreu um erro ao carregar os CIDs. OK >> input[name="btnOk"]
    await page.click("text=Ocorreu um erro ao carregar os CIDs. OK >> input[name=\"btnOk\"]")
    # Click [placeholder="Informe o nome ou matrícula ou CPF ou Empresa..."]
    await page.click("[placeholder=\"Informe o nome ou matrícula ou CPF ou Empresa...\"]")
    # Fill [placeholder="Informe o nome ou matrícula ou CPF ou Empresa..."]
    await page.fill("[placeholder=\"Informe o nome ou matrícula ou CPF ou Empresa...\"]", "49699201843")
    # Go to https://mecsas-saude.appspot.com/beneficiarios/consultar
    await page.goto("https://mecsas-saude.appspot.com/beneficiarios/consultar")
    # Click #mascara
    await page.click("#mascara")
    # Click text=Ocorreu um erro ao carregar os CIDs. OK >> input[name="btnOk"]
    await page.click("text=Ocorreu um erro ao carregar os CIDs. OK >> input[name=\"btnOk\"]")
    # ---------------------
    await context.close()
    await browser.close()
async def main() -> None:
    async with async_playwright() as playwright:
        await run(playwright)
asyncio.run(main())


from playwright.sync_api import Playwright, sync_playwright
def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    # Open new page
    page = context.new_page()
    # Go to https://mecsas-saude.appspot.com/login
    page.goto("https://mecsas-saude.appspot.com/login")
    # Click text=usuario@email.com.br
    page.click("text=usuario@email.com.br")
    # Click input[name="email"]
    page.click("input[name=\"email\"]")
    # Click input[name="email"]
    page.click("input[name=\"email\"]")
    # Fill input[name="email"]
    page.fill("input[name=\"email\"]", "rh@connectcom.com.br")
    # Click text=Senha
    page.click("text=Senha")
    # Fill input[name="senhaLogin"]
    page.fill("input[name=\"senhaLogin\"]", "conne@2021")
    # Click text=Acessar
    page.click("text=Acessar")
    # assert page.url == "https://mecsas-saude.appspot.com/home"
    # Click text=bottomMiddle
    page.click("text=bottomMiddle")
    # assert page.url == "https://mecsas-saude.appspot.com/beneficiarios/consultar"
    # Click #mascara-17344019715156223 #mascara
    page.click("#mascara-17344019715156223 #mascara")
    # Click #mascara-17344019715156223 #mascara
    page.click("#mascara-17344019715156223 #mascara")
    # Click #mascara-17344019715156223 #mascara
    page.click("#mascara-17344019715156223 #mascara")
    # Click #mascara-17344019715156223 #mascara
    page.click("#mascara-17344019715156223 #mascara")
    # Click #mascara-17344019715156223 #mascara
    page.click("#mascara-17344019715156223 #mascara", button="right")
    # Click text=Ocorreu um erro ao carregar os CIDs. OK >> input[name="btnOk"]
    page.click("text=Ocorreu um erro ao carregar os CIDs. OK >> input[name=\"btnOk\"]")
    # Click [placeholder="Informe o nome ou matrícula ou CPF ou Empresa..."]
    page.click("[placeholder=\"Informe o nome ou matrícula ou CPF ou Empresa...\"]")
    # Fill [placeholder="Informe o nome ou matrícula ou CPF ou Empresa..."]
    page.fill("[placeholder=\"Informe o nome ou matrícula ou CPF ou Empresa...\"]", "49699201843")
    # Go to https://mecsas-saude.appspot.com/beneficiarios/consultar
    page.goto("https://mecsas-saude.appspot.com/beneficiarios/consultar")
    # Click #mascara
    page.click("#mascara")
    # Click text=Ocorreu um erro ao carregar os CIDs. OK >> input[name="btnOk"]
    page.click("text=Ocorreu um erro ao carregar os CIDs. OK >> input[name=\"btnOk\"]")
    # ---------------------
    context.close()
    browser.close()
with sync_playwright() as playwright:
    run(playwright)

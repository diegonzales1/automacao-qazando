package steps;

import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;
import org.junit.Assert;
import org.openqa.selenium.By;
import pages.CadastroUsuarioPage;
import runner.RunCucumber;

public class CadastroUsuarioSteps extends RunCucumber {

    CadastroUsuarioPage cadastroUsuarioPage = new CadastroUsuarioPage();

    @Quando("^clico em cadastrar$")
    public void clico_em_cadastrar() {
        cadastroUsuarioPage.clicarEmCadastrar();
    }


    @Entao("^vejo mensagem de campo nome não preenchido$")
    public void vejo_mensagem_de_campo_nome_não_preenchido() {
        Assert.assertEquals("Mensagem não encontrada","O campo nome deve ser prenchido", cadastroUsuarioPage.validaMensagemErroNome());
    }

}

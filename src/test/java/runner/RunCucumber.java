package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

//Informa que vamos executar o Cucumber
@RunWith(Cucumber.class)

// informa algumas opções de execução
@CucumberOptions(
        plugin = {"json:target/reports/cucumberTests.json","html:target/reports/"}, //REPRESENTA OS PLUGINS DE RELATORIOS
        features = "src/test/resources/features",
        glue = {"steps"}, //GLUE SERVE PRA DIZER QUAL É O NOME DA PASTA ONDE FICA OS STEPS
        tags = {} //SERVE PARA EXECUTAR UM CENARIO ESPECIFICO
)
public class RunCucumber extends RunBase{

    @AfterClass
    public static void stop(){
        getDriver().quit();
    }
}

//mvn test -Dtest=RunCucumber cluecumber-report:reporting
//mvn test -Dtest=RunCucumber -DBrowser=Chrome cluecumber-report:reporting
Quando a gente começa a programar, normalmente aprende a criar variáveis, funções, condições e loops. Depois de um tempo, aparece uma palavra nova: **POO**.

E aí vêm outras: classe, objeto, construtor, herança, polimorfismo... Parece muita coisa de uma vez, né?

Mas a ideia por trás da Programação Orientada a Objetos é bem mais simples do que essa lista de nomes faz parecer. Neste artigo, vamos entender **o que é POO, por que ela existe e como esses conceitos aparecem no código**.

Vou usar Java nos exemplos porque ele deixa esses conceitos bem visíveis. Só que já adianto: **POO não é coisa do Java**. É uma forma de organizar programas, e várias linguagens permitem trabalhar assim.

## Antes de tudo: o que é um paradigma?

Você provavelmente já resolveu problemas criando funções que recebem dados e devolvem resultados. E isso funciona muito bem.

Um **paradigma de programação** é, basicamente, uma maneira de pensar e organizar esse código. Na programação procedural, por exemplo, a gente costuma organizar o programa em procedimentos e funções. Na orientação a objetos, a ideia é organizar parte do sistema em objetos que guardam informações e sabem executar certas ações.

Uma abordagem não elimina a outra. E não existe uma regra dizendo que POO é sempre a melhor escolha.

Pensa num sistema de biblioteca. Você pode ter funções para cadastrar livros, fazer empréstimos e consultar o que está disponível. Com POO, pode modelar objetos como `Livro` e `Emprestimo`, cada um cuidando do que faz sentido para ele.

O ponto não é sair criando classes para tudo. É **organizar responsabilidades**.

## Então, o que é POO?

POO significa **Programação Orientada a Objetos**. É um paradigma em que a gente organiza o programa usando objetos.

Um objeto pode ter **informações** (como o saldo de uma conta) e **ações** (como depositar ou sacar). Em termos técnicos, essas informações são chamadas de *atributos*, e as ações geralmente aparecem como *métodos*.

Por que isso é útil? Imagine uma conta bancária. Em vez de deixar qualquer parte do sistema alterar o saldo como quiser, podemos colocar as regras de depósito e saque no próprio objeto. Assim, fica mais fácil entender quem é responsável por cada coisa.

Isso não quer dizer que POO resolve automaticamente todos os problemas de organização. Dá para escrever código confuso com classes também. O importante é como a gente usa os conceitos.

## Classes e objetos: não são a mesma coisa

Essa costuma ser a primeira confusão de quem está aprendendo POO.

Pensa numa **classe como uma definição**: ela diz quais informações e ações um tipo de objeto vai ter. Já o **objeto é algo criado a partir dessa definição**.

Vamos usar carros como exemplo. Uma classe `Carro` pode definir que todo carro tem um modelo, uma velocidade e uma ação para acelerar. Mas o Fusca e a Ferrari que criamos no programa são **dois objetos diferentes**, cada um com seus próprios valores.

![Classe Carro dando origem a dois objetos com estados independentes.](/images/blog/programacao-orientada-a-objetos-poo-entendendo-os-conceitos-alem-da-linguagem/classe-x-objeto.png)

Em Java, podemos escrever assim:

```java
public class Carro {
    String modelo;
    int velocidade;

    void acelerar() {
        velocidade += 10;
    }
}
```

E criar dois carros:

```java
Carro fusca = new Carro();
fusca.modelo = "Fusca";

Carro ferrari = new Carro();
ferrari.modelo = "Ferrari";

fusca.acelerar();

System.out.println(fusca.velocidade);   // 10
System.out.println(ferrari.velocidade); // 0
```

Os dois seguem a mesma definição, mas acelerar o Fusca não faz a Ferrari acelerar junto. Cada objeto tem seu próprio estado.

Por enquanto, deixamos os atributos acessíveis para facilitar o exemplo. Daqui a pouco vamos melhorar isso.

## Atributos, métodos e construtores

Antes de entrar nos famosos pilares da POO, vale entender três nomes que você vai encontrar o tempo todo:

- **Atributos:** guardam informações do objeto, como `modelo` e `velocidade`.
- **Métodos:** são ações que o objeto pode executar, como `acelerar()`.
- **Construtores:** ajudam a criar o objeto já com as informações iniciais necessárias.

Olha como fica nossa classe com um construtor:

```java
public class Carro {
    private final String modelo;
    private int velocidade;

    public Carro(String modelo) {
        this.modelo = modelo;
        this.velocidade = 0;
    }

    public void acelerar() {
        velocidade += 10;
    }

    public int getVelocidade() {
        return velocidade;
    }
}
```

Agora podemos criar um carro informando o modelo logo de início:

```java
Carro carro = new Carro("Fusca");
carro.acelerar();
System.out.println(carro.getVelocidade()); // 10
```

O `this.modelo` aponta para o atributo do próprio objeto. Já o `modelo` sem `this` é o valor que recebemos no construtor.

Você também deve ter reparado no `private`. Ele nos leva ao primeiro dos quatro pilares.

## Os quatro pilares da POO

É comum aprender POO a partir de quatro conceitos: **encapsulamento, abstração, herança e polimorfismo**. Vamos entender cada um sem complicar.

### 1. Encapsulamento: nem tudo deve ficar exposto

Imagina que qualquer parte de um sistema bancário pudesse fazer isso:

```java
conta.saldo = -5000;
```

Não parece uma boa ideia, certo? Se o saldo pode mudar de qualquer jeito, como garantir que as regras da conta sejam respeitadas?

O **encapsulamento** ajuda justamente nisso: controlar o acesso às informações internas do objeto e definir como elas podem ser alteradas.

```java
public class ContaBancaria {
    private double saldo;

    public void depositar(double valor) {
        if (valor <= 0) {
            throw new IllegalArgumentException("Valor inválido");
        }

        saldo += valor;
    }

    public double consultarSaldo() {
        return saldo;
    }
}
```

Agora, para aumentar o saldo, precisamos usar `depositar()`, que verifica o valor antes de fazer a alteração.

![Conta bancária com saldo protegido e acesso controlado por métodos.](/images/blog/programacao-orientada-a-objetos-poo-entendendo-os-conceitos-alem-da-linguagem/encapsulamento.png)

Um detalhe importante: **encapsular não é simplesmente colocar `private` em tudo e criar getters e setters**. Se um setter deixa qualquer pessoa colocar qualquer valor no saldo, não resolvemos o problema.

*Aqui usamos `double` para não desviar do assunto. Em um sistema financeiro de verdade, valores monetários precisam de mais cuidado; em Java, `BigDecimal` é uma opção comum.*

### 2. Abstração: usar algo sem conhecer todos os detalhes

Você não precisa saber como funciona o motor de um carro para dirigir. Precisa saber como usar os controles disponíveis.

No código, a **abstração** segue uma ideia parecida: mostrar o que é importante para usar alguma coisa, sem obrigar quem usa a conhecer todos os detalhes de como ela funciona.

Por exemplo, podemos dizer que nosso sistema tem um jeito de enviar notificações:

```java
public interface Notificador {
    void enviar(String mensagem);
}
```

Essa interface define **o que precisa ser feito**, mas não **como**. Uma implementação pode enviar e-mail:

```java
public class NotificadorEmail implements Notificador {
    @Override
    public void enviar(String mensagem) {
        System.out.println("Enviando e-mail: " + mensagem);
    }
}
```

Outra implementação poderia enviar SMS. Quem usa o contrato `Notificador` não precisa conhecer todos os detalhes de cada serviço.

Abstração e encapsulamento são próximos, mas não são iguais: **abstração foca no que precisamos conhecer; encapsulamento ajuda a controlar o que pode ser acessado ou alterado**.

### 3. Herança: quando um tipo é uma versão mais específica de outro

Pensa em `Animal` e `Cachorro`. Um cachorro **é um** animal. Essa relação ajuda a entender a herança.

Com herança, uma classe pode aproveitar ou especializar comportamentos de outra:

```java
public class Animal {
    public void emitirSom() {
        System.out.println("Som de animal");
    }
}

public class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Au au!");
    }
}
```

Em Java, `extends` indica a herança. Já `@Override` mostra que estamos substituindo o comportamento herdado por uma versão específica.

![Hierarquia de herança entre Animal, Cachorro e Gato.](/images/blog/programacao-orientada-a-objetos-poo-entendendo-os-conceitos-alem-da-linguagem/heranca.png)

Só não confunda herança com uma regra de que tudo precisa herdar de alguma coisa. Um carro **tem um** motor, mas não **é um** motor. Nesse caso, faz mais sentido que um objeto utilize outro. Isso é chamado de **composição**.

### 4. Polimorfismo: a mesma chamada, resultados diferentes

Esse nome assusta mais do que o conceito.

Lembra do método `emitirSom()`? Podemos ter um `Cachorro` e um `Gato` que respondem à mesma chamada de formas diferentes:

```java
public class Gato extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Miau!");
    }
}
```

Agora veja:

```java
Animal[] animais = {
    new Cachorro(),
    new Gato()
};

for (Animal animal : animais) {
    animal.emitirSom();
}
```

O resultado será:

```text
Au au!
Miau!
```

O código chama `emitirSom()` para todos os animais, sem precisar perguntar se cada um é cachorro ou gato. **Cada objeto sabe como responder.**

Esse é um exemplo de polimorfismo. Também podemos conseguir esse comportamento usando interfaces, sem precisar que todas as implementações herdem de uma mesma classe concreta.

## Juntando tudo: um exemplo de back-end

Até aqui usamos carros, animais e contas bancárias para entender os conceitos. Mas como isso aparece em algo mais próximo do nosso dia a dia como dev?

Vamos imaginar um checkout que aceita Pix e cartão.

Uma primeira ideia seria verificar o tipo de pagamento com `if`:

```java
if (tipo.equals("PIX")) {
    // Processa Pix
} else if (tipo.equals("CARTAO")) {
    // Processa cartão
}
```

Não tem nada de errado em usar `if`. O problema começa quando a mesma decisão se espalha por vários lugares do sistema.

Podemos criar um contrato comum para os pagamentos:

```java
public interface Pagamento {
    void processar(double valor);
}
```

E duas implementações:

```java
public class PagamentoPix implements Pagamento {
    @Override
    public void processar(double valor) {
        System.out.println("Processando Pix: R$ " + valor);
    }
}
```

```java
public class PagamentoCartao implements Pagamento {
    @Override
    public void processar(double valor) {
        System.out.println("Processando cartão: R$ " + valor);
    }
}
```

Agora nosso serviço de checkout só precisa conhecer a interface:

```java
public class CheckoutService {
    private final Pagamento pagamento;

    public CheckoutService(Pagamento pagamento) {
        this.pagamento = pagamento;
    }

    public void finalizarCompra(double valor) {
        if (valor <= 0) {
            throw new IllegalArgumentException("Valor inválido");
        }

        pagamento.processar(valor);
    }
}
```

Na hora de usar:

```java
CheckoutService checkoutPix =
    new CheckoutService(new PagamentoPix());

checkoutPix.finalizarCompra(150);

CheckoutService checkoutCartao =
    new CheckoutService(new PagamentoCartao());

checkoutCartao.finalizarCompra(200);
```

Percebe a diferença? O checkout não precisa saber se está trabalhando com Pix ou cartão. Ele só precisa receber algo que saiba `processar()` um pagamento.

![CheckoutService usando um contrato de pagamento com implementações Pix e cartão.](/images/blog/programacao-orientada-a-objetos-poo-entendendo-os-conceitos-alem-da-linguagem/fluxo-do-checkout.png)

Nesse exemplo aparecem vários conceitos juntos: temos **objetos**, um **contrato** que abstrai o processamento, **implementações diferentes** respondendo à mesma chamada (polimorfismo) e um serviço que **recebe outro objeto** para fazer seu trabalho (composição).

É um exemplo simplificado: ele só imprime mensagens, não cobra ninguém de verdade. Em produção, precisaríamos lidar com APIs externas, falhas, segurança e valores monetários com precisão adequada.

## Mas POO não é coisa do Java?

Não. Escolhemos Java porque ele deixa classes, interfaces e herança bem explícitas. Mas a ideia existe em outras linguagens, como C#, Python, C++ e TypeScript.

Olha como o contrato de pagamento ficaria em TypeScript:

```typescript
interface Pagamento {
  processar(valor: number): void
}

class PagamentoPix implements Pagamento {
  processar(valor: number): void {
    console.log(`Processando Pix: R$ ${valor}`)
  }
}
```

A sintaxe muda, mas o raciocínio é parecido.

E vale lembrar: uma linguagem ter classes não significa que você precise resolver tudo com classes. Muitas linguagens permitem misturar diferentes estilos de programação.

## Quando vale a pena usar POO?

POO costuma fazer bastante sentido quando temos regras de negócio, objetos com estado que precisa ser controlado ou diferentes comportamentos que seguem um mesmo contrato.

Mas nem tudo precisa virar uma classe. Se uma função simples resolve o problema de forma clara, talvez ela seja suficiente.

Antes de criar uma nova abstração, vale se perguntar: **isso vai deixar o código mais fácil de entender e manter, ou só vai criar mais arquivos e camadas?**

Usar POO bem não é aplicar todos os conceitos o tempo todo. É saber quando cada um ajuda.

## Conclusão

Se POO parecia uma coleção de nomes complicados, espero que agora faça mais sentido.

A ideia principal é organizar o programa em objetos com informações e comportamentos. **Classes** ajudam a definir esses objetos; **encapsulamento** controla o acesso ao que acontece dentro deles; **abstração** mostra o que importa; **herança** permite especializações; e **polimorfismo** deixa diferentes objetos responderem a uma mesma operação.

Você não precisa decorar tudo de primeira. Tenta criar uma classe simples, instanciar dois objetos e observar como cada um mantém seu estado. Depois, experimente esconder um atributo e criar um método para alterá-lo com uma regra. Aos poucos, as peças começam a se encaixar.

E lembre: **entender POO é mais importante do que decorar a sintaxe de Java, TypeScript ou qualquer outra linguagem**.

No próximo artigo, podemos ir um passo além e conversar sobre **SOLID**: princípios que ajudam a pensar nas responsabilidades e dependências do nosso código, sem transformar cada projeto numa arquitetura gigante.

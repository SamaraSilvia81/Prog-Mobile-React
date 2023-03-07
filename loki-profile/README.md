![ROCKETSEATESPECIALIZAR]()
<br><br><br>
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Profile+Loki+!;React+Native+e+Expo+Go&pause=1000&color=3C8E83&width=435)](https://git.io/typing-svg)

## Projeto Inicial de React Native - Loki Profile
![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=3C8E83&style=for-the-badge)
> Esse mine projeto mobile é voltado para compor os principais componentes desse framework com um ainterface amigável e de temática criativa, sendo eles: View; ScrollView; Text; TextInput e StyleSheet.

<br>

- **View** - É o componente fundamental para construir a interface do usuário. Ele é semelhante a uma div no HTML, permitindo a criação de caixas, containers e layout.
- **ScrollView** - É um componente que permite a criação de uma área de rolagem em seu conteúdo. É útil quando você tem uma grande quantidade de conteúdo que não cabe na tela.
- **Text** - É um componente que permite a exibição de texto na interface do usuário. Ele suporta vários estilos de formatação de texto, como negrito, itálico e sublinhado.
- **TextInput** - É um componente que permite a exibição de texto na interface do usuário. Ele suporta vários estilos de formatação de texto, como negrito, itálico e sublinhado.
- **StyleSheet** - É um objeto que permite a criação de estilos para componentes. É semelhante ao CSS no HTML e é usado para definir as propriedades visuais dos componentes.

## Instalando o Projeto

Se você já tiver na sua máquina o node js, então será preciso fazer um clone no projeto, digitando no seu terminal o comando `git clone`. E depois você precisa reinstalar as dependências com o comando `npm i` e, por fim, apenas dar o comando de inicío para abrir o QR Code, no qual você vai colocar no app Expo Go. O comando é `npx expo start --tunnel`.

## Explicando o Projeto 

Criamos uma view (div) pai, porque o app vai renderizar apenas uma única página (single page). E dentro dessa view pai, colocamos nossas imagens, textos e um input sem resposta, apenas para preencher.

Para a parte do "profile" separamos duas views, uma específica para a imagem do Loki e outra para sua descrição, dessa forma poderemos fazer um "flex". 

Para o scrollView foi usado apenas a própria view do scroll + "view", e dentro dela ordenamos os nossos dados como: Texto + Imagem + Input.

```js

import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.profile}>
        <View style={styles.avatar}>
          <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.bb961a61515c143c30cf73db13969e03?rik=lwYqZ3VIBa1vUA&pid=ImgRaw&r=0',
              }}
              style={styles.avatar}
            />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>Loki Laufeyson</Text>
          <Text  style={styles.subtitle}>Rei de Asgard</Text>
        </View>
      </View>
      <ScrollView style={styles.scrool}>
           <Text style={styles.question}> • Loki é heroi, vilão ou anti-heroi ? </Text>
            <Image
                source={{
                uri: 'https://th.bing.com/th/id/R.a63c26190a0541fe32bf5a2f32ed0c38?rik=UPM8UNDSX4%2bwPw&pid=ImgRaw&r=0',
              }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
            <Text style={styles.question}> • Cite uma característica do Loki</Text>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/7e/1a/2d/7e1a2d99ae39095a914a4e149954c3d1--loki-costume-loki-cosplay.jpg',
              }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
            <Text style={styles.question}> • Cite um filme com o loki </Text>
              <Image
                 source={{
                  uri: 'https://images.hdqwalls.com/wallpapers/loki-the-god-mischief-el.jpg',
                }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
            <Text style={styles.question}> • Qual você acha que seria o MBTI do Loki ? </Text>
              <Image
                 source={{
                  uri: 'https://th.bing.com/th/id/OIP.49mSmBDcm0E9ExBJ_pvKnwHaEK?pid=ImgDet&rs=1',
                }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
              <Text style={styles.question}> • Loki ou Sylvie ? </Text>
              <Image
                 source={{
                  uri: 'https://s.hdnux.com/photos/01/21/00/53/21236472/6/1200x0.jpg',
                }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
            <Text style={styles.question}> • Qual seu loki favorito ? </Text>
              <Image
                 source={{
                  uri: 'https://th.bing.com/th/id/R.da35dbdac4968bdaaeab099d30b17c2a?rik=cmr%2bDWNHY%2fdPHw&pid=ImgRaw&r=0',
                }}
              style={styles.fig}
            />
            <TextInput
              style={styles.TextInput}
              defaultValue="You can type in me"
            />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    paddingTop: 28,
    paddingLeft: 80,
    width: 110,
    height: 110,
    borderRadius: 60,
  },
  profile: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    display: 'flex',
    borderColor: '#2B5C56',
    borderWidth: 1,
    backgroundColor: '#23232a'
  },
  fig: {
    width: 350,
    height: 160,
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    paddingTop: 10,
    color: 'white',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat'
  },
  subtitle:{
    paddingTop: 10,
    color: '#3C8E83',
    fontSize: 14
  },
  text:{
    color: 'white',
  },
  question:{
    paddingTop: 11,
    color: 'white',
    height: 40,
    borderColor: '#2B5C56',
    backgroundColor: '#3C8E83',
    borderWidth: 1,
  },
  description: {
    width: 300,
    height: 150,
    marginLeft: 80,
    alignItems: 'center',
    padding:50,
    paddingRight: 130,
    color: 'green',
    backgroundColor: '#23232a'
  },
  TextInput: {
    color: 'white',
    height: 50,
    borderColor: '#2B5C56',
    borderWidth: 1,
  },
  scrool:{
    backgroundColor: '#23232a',  // 2B5C56
    marginLeft: 1,
  }
});

```

## StyleSheet

A aplicação do CSS em React Mobile não se difere muito do css normal, tendo apenas um aspecto que é se assemelha a estrutura de objeto, além do fato de que cada propriedade que antes era separada por "-" segue a lógica de `camelCase`.

```css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    paddingTop: 28,
    paddingLeft: 80,
    width: 110,
    height: 110,
    borderRadius: 60,
  },
  profile: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    display: 'flex',
    borderColor: '#2B5C56',
    borderWidth: 1,
    backgroundColor: '#23232a'
  },
  fig: {
    width: 350,
    height: 160,
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    paddingTop: 10,
    color: 'white',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat'
  },
  subtitle:{
    paddingTop: 10,
    color: '#3C8E83',
    fontSize: 14
  },
  text:{
    color: 'white',
  },
  question:{
    paddingTop: 11,
    color: 'white',
    height: 40,
    borderColor: '#2B5C56',
    backgroundColor: '#3C8E83',
    borderWidth: 1,
  },
  description: {
    width: 300,
    height: 150,
    marginLeft: 80,
    alignItems: 'center',
    padding:50,
    paddingRight: 130,
    color: 'green',
    backgroundColor: '#23232a'
  },
  TextInput: {
    color: 'white',
    height: 50,
    borderColor: '#2B5C56',
    borderWidth: 1,
  },
  scrool:{
    backgroundColor: '#23232a',  // 2B5C56
    marginLeft: 1,
  }
```

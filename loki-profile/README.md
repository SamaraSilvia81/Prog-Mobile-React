![ROCKETSEATESPECIALIZAR]()
<br><br><br>
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Profile+Loki+!;React+Native+e+Expo+Go&pause=1000&color=3C8E83&width=435)](https://git.io/typing-svg)

## Projeto Inicial de React Native - Loki Profile
![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=3C8E83&style=for-the-badge)
> Esse mine projeto mobile é voltado para compor os principais componentes desse framework com um ainterface amigável e de temática criativa, sendo eles: View; ScrollView; Text; TextInput and StyleSheet.

<br>

- View - 
- ScrollView - 
- Text - 
- TextInput - 
- StyleSheet - 

## Instalando o Projeto 

Se você já tiver na sua máquina o node js, então será preciso fazer um clone no projeto, digitando no seu terminal o comando `git clone`. E depois você precisa reinstalar as dependências com o comando `npm i` e, por fim, apenas dar o comando de inicío para abrir o QR Code, no qual você vai colocar no app Expo Go. O comando é `npx expo start --tunnel`.

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

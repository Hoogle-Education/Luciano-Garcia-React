// nullish coalescence operator

// falsy = 0, [], undefined, null, NaN, ''
// nullables = undefined, null, NaN

const pessoa = {
  nome: "Joao",
  idade: 20,
  pontuacao: 0
}

const apelido = pessoa.apelido || "Nao se aplica"

// const resultado = pessoa.pontuacao || "Nao se aplica"
const resultado = pessoa.pontuacao ?? "Nao se aplica"
// ?? => retorna o segundo membro se o primeiro for nullable

console.log(`apelido: ${apelido}`)
console.log(`resultado: ${resultado}`)

const user = {
  name: 'Hugo',
  age: 21,
  address: {
    street: 'Rua',
    number: '123'
  }
}

console.log('name' in user)
console.log(Object.keys(user))
console.log(Object.values(user))

const { age } = user

console.log(age)

function apresentarInformacoesPessoais({name = "Nao foi informado", age = "Nao foi informado"}) {
  console.log(name)
  console.log(age)
}

console.log("------------------")
apresentarInformacoesPessoais(user)
apresentarInformacoesPessoais({email: "test@gmail.com", password: "12345"})

console.log("------------------")
// rest operator

const product = {
  nome: 'tenis',
  modelo: 'esportivo',
  marca: 'nike'
}

const { nome, ...rest } = product

console.log(nome)
console.log(rest)

let inteiros = [1, 2, 3]
const novosInteiros = [6, 7, 8]

// ... -> spread operator

inteiros = [...inteiros, ...novosInteiros]
console.log(inteiros)

const cart = {
  user: {
    name: "John",
    email: "john@gmail.com",
    address: {
      street: "Street A",
      number: "123",
    }
  }, 
  products: []
}

// renomeando o membro desestruturado
const { user: cartUser } = cart // const cartUser = user
console.log(user)

const { user: { name } } = cart // const { name } = user

const { user: { address: { street } } } = cart
// talvez seja melhor separar...

const empolyee = {
	name: "Pedro",
	job: {
		name: "Developer",
		time: "2 months ago",
		company: {
			name: "Chat SBT",
			createdAt: "2023/03/20"
		},
		
		drinkCoffee(hour) {
			return (hour > 9 && hour < 16 ) ?
				"Coffee time :)" : "Sorry, it's closed :/";
		}
	}
}

// ruim
const empolyeeCompanyName_bad = empolyee.job ? 
  empolyee.job.company ? 
    empolyee.job.company.name
    : "Nao possui"
  : "Nao possui"

// melhor
const empolyeeCompanyName = empolyee.job?.company?.name ?? "Nao possui"

const coffeMsg = empolyee.job?.drinkCoffee?.()

// early return
function proccessTokens() {
  if(!hasToken("user"))
    return

  // restante da logica
}

// metodo de array

const news = [
  {
    id: 1,
    title: "Some random news 1",
    author: "Awesome author 1",
    content: "Lorem ipsum dolor sit amet",
    publishedAt: "11/03/2023 03:20"  
  },
  {
    id: 2,
    title: "Some random news 2",
    author: "Awesome author 2",
    content: "Lorem ipsum dolor sit amet",
    publishedAt: "11/03/2023 03:20"  
  },
  {
    id: 3,
    title: "Some random news 3",
    author: "Awesome author 3",
    content: "Lorem ipsum dolor sit amet",
    publishedAt: "11/03/2023 03:20"  
  },
  {
    id: 4,
    title: "Some random news 4",
    author: "Awesome author 4",
    content: "Lorem ipsum dolor sit amet",
    publishedAt: "11/03/2023 03:20"  
  }
]

// executa uma acao por todos os elementos do array
news.forEach( ({title, content}, index) => {
  console.log("----------")
  console.log(index)
  console.log(title)
  console.log(content)
  console.log("----------")
} )

const result = news.map(({title, content}) => {
  return {title, content} 
})

console.log(result)

console.log(news.filter(({id}) => (id%2 === 0)))
console.log(news.every(({id}) => (id < 4)))
console.log(news.some(({id}) => (id < 4)))
console.log(news.find(({id}) => (id === 3)))
console.log(news.filter(({id}) => (id === 3)))

const mergeNotice = news.reduce((accumulator, article) => {
  return {
    title: "merged notice",
    authors: [...accumulator.authors, article.author],
    content: accumulator.content + " " + article.content
  }
}, {title: "", authors: [], content: ""})

console.log(mergeNotice)


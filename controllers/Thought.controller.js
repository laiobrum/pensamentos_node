import Thought from '../models/Thought.js'
import User from '../models/User.js'

class ThoughtController {
    //HOME
    static async home(req, res){
        let allThoughts = await Thought.findAll({raw:true})
        let allUsers = await User.findAll({raw:true})
        console.log(allThoughts)
        console.log(allUsers)
        res.render('home', {allThoughts, allUsers})
    }
    //SIGNUP
    static signup(req, res){
        res.render('signup')
    }
    static async createUser(req, res){
        let password = req.body.password
        let confirmPassword = req.body.confirmPassword
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: password
        }
        let errorMessage = 'As senhas não coincidem. Tente novamente.'
        let show = 'show'
        if (password !== confirmPassword) {
            res.render('signup', {user, errorMessage, show})
            return
        } else {
            await User.create(user)
            res.redirect('/signin')
        }
    }
    //SIGN IN
    static signin(req, res){
        res.render('signin')
    }
    static async userSignIn(req, res){
        const email = req.body.email
        const password = req.body.password
        const errorMessage = "Dados errados. Tente novamente"
        let show = 'show'
        const user = await User.findOne({raw:true, where: {email:email}})
        if (email == user.email && password == user.password) {
            res.redirect('/')
        } else {
            res.render('signin', {errorMessage, show})
        }
    }
    //DASHBOARD E CRIAR PENSAMENTO
    static async dashboard(req, res){
        let thoughts = await Thought.findAll({raw:true, where: {UserId:7}})//Aqui deveria estar o id do usuário
        thoughts = [...thoughts]//Quando há só 1 elemento no objeto, ele não é passado como array, e não vai ser lido lá no handlebars se for colocado um {{#each}}. Por isso, transformamos ele em array aqui.
        let show
        if(thoughts == '') {
            thoughts = "Não há pensamentos. Insira clicando no botão ao lado."
            show = "show"
        }          
        console.log(thoughts)
        res.render('dashboard', {thoughts, show})
        
    }
    static create (req, res) {
        res.render('create')
    }
    static async newThought(req, res) {
        const thought = {
            UserId: req.body.id,
            thought: req.body.thought
        }
        console.log(thought)
        await Thought.create(thought)
        res.redirect('/')
    }
}

export {ThoughtController}





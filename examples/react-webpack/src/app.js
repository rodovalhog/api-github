"use strict"
import React, {Component, PropTypes} from "react"
import AppContent from "./Components/app-content";
class App extends Component{
  constructor () {
    super () 

    this.state = {
      carregando: false,
      userInfo: null,
      repos: [],
      starred: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
  }


      ajax = (url) => {
        let promise = new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send(null)
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 304){
              let resposta = xhr.responseText;
              resposta = JSON.parse(resposta)
              resolve(resposta)
            }else{
              reject('algo deu errado')
            }
          }
        }

        })
        return promise;
      }
  
   handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13    
    const url = `https://api.github.com/users/${value}`
    if(keyCode === ENTER ){
      this.setState({carregando: true})
      setTimeout(() => {
        this.ajax(url).then((result) => {
          this.setState({
            userInfo:{
              name: result.login,
              photo: result.avatar_url,
              repositorio: result.public_repos,
              seguidores: result.followers,
              seguindo: result.following,
              link: result.html_url
            }
          })
        })
        .finally(() => this.setState({ carregando: false }))
      },2000)
    }   
}

  getRepos(type) {
  
    return (e) => {

      const usuario = this.state.userInfo.name
      console.log(this.state.userInfo)
      let url = `https://api.github.com/users/${usuario}/${type}`
      console.log(url)
      this.ajax(url).then((result) => {
        this.setState({
        [type] : result.map((repo) => {
          return {
            name: repo.name,
            link: repo.html_url
          }
        })
        })
      })
    }
  }
  
  render () {
    return (
      <AppContent 
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getFavorito={this.getRepos('starred')}
           />
    )
  }
}

export default App 
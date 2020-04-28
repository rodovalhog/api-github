import React from "react"
import Search from "./search"
import Photo from "./photo";
import Title from "./title";
import Lista from "./lista";
import Botao from "./botao";
import Name from "./name";

const AppContent = ({userInfo, repos, starred, handleSearch, getRepos, getFavorito, carregando}) => (
    <div className="app">
          <Search 
            classname="search"
            type="search"
            placeHolder="Digite o nome do usuario do github"
            handleSearch={handleSearch}
          />
          {carregando && 
          <div>carregando...</div>
          }
          
         {!!userInfo &&
           <div className="user-info">
           <Photo
             classname="imagem" 
             link={userInfo.photo}
           />
           <Name 
             link={userInfo.link}
             classname="name"
             name={userInfo.name}
             qntRepositorio={userInfo.repositorio}
              qntSeguidores={userInfo.seguidores}
              qntSeguindo={userInfo.seguindo}
           />
         </div>
         }
        <div className="flex mt20 ">
        {!!userInfo && <div className=''> <Botao
        getRepos={getRepos}
            title ="Repositorio" /> </div>}
              {!!repos.length && <div className="centralizando w-50 bgc ">
              <div className="borda ">
                <Title 
                  title="Repositorio"
                />
                <Lista
                  classname="reposi-info"
                  array = {repos}
                />
              </div>
          </div>}
          {!!userInfo &&  <Botao 
              title="Favoritos"
              getRepos={getFavorito}
            />}
         { !!starred.length && <div className="centralizando w-50 bgc">
            <div className="borda">
              <Title 
                title="Favoritos"
              />
              <Lista 
               classname="reposi-info"
               array = {starred}
               />
            </div>  
          </div>}
        </div>
    </div>
)
export default AppContent
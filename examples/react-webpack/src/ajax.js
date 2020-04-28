class Ajax {
    constructor(url){
        this.xhr = new XMLHttpRequest();
        this.pegar = this.xhr.open(`GET, ${url}`);
        this.enviar = this.xhr.send(null);
        this.verificar = this.xhr.onreadystatechange = this.verifica()
       
    }
    
    verifica(){
        const state = this.xhr.readyState
        const status = this.xhr.status
        if(state === 4){
            if(status === 200 ||status === 304){
                let resposta = this.xhr.responseText;
                resposta = JSON.parse(resposta)
            }else{
                alert(`Deu ruim seu status e ${status} e seu estado e ${state}`)
            }
        }
    }
    
}
export default Ajax
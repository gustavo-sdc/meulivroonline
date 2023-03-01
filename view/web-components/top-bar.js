class top_bar extends HTMLElement{
    constructor(){
        super()

        this.build()
    } 

    build(){
        const shadow = this.attachShadow({mode: 'open'})
        
        const topbar = this.createMenu()

        shadow.appendChild(topbar)
        shadow.appendChild(this.styleElement())

    }

    createMenu(){
        const back = document.createElement('header')
        back.setAttribute('class', 'top-bar')

        const content = document.createElement('h1')
        content.innerText ='Olá mundo'
        back.appendChild(content)

        return back
    }



    styleElement(){
        const style = document.createElement('style')
        style.textContent = `
            h1{
                color:white;
            }

            .top-bar{
                background-color:black;
                border-radius:30px;
                width:90vw;
                height:10vh;
            
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            
                margin-top:2vh;
            }
        `

        return style
    }

}

customElements.define('top-bar', top_bar)
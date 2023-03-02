class top_bar extends HTMLElement{
    constructor(){
        super()

        this.build()
    } 

    build(){
        const shadow = this.attachShadow({mode: 'open'})
        
        const topbar = this.createMenu()

        shadow.appendChild(topbar)
    }

    createMenu(){
        const back = document.createElement('header')
        back.setAttribute('part', 'background')

        back.innerHTML=`
                    <h1>Olá</h1>
        `

        return back
    }
}

customElements.define('top-bar', top_bar)
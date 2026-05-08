function customRender(reactElement,container){
    /* Static Code (This code has flaws, what if the attributes increase or decrease)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me to visit Google' 
}


const root = document.getElementById('root')

customRender(reactElement,root)
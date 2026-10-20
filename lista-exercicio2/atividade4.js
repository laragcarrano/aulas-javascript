const elementosFake=[
    {
        tagName:'DIV',
        style:{color:'blue',display:'flex'},
        classList:['container','active']
    },
    {
        tagName:'H1',
        style:{color:'red',display:'block'},
        classList:['title']
    },
    {
    tagName:'BUTTON',
    style:{color:'white',display:'inline-block'},
    }
    ];

    elementosFake.forEach(elemento=>{
        console.log(`Tag:${elemento.tagName} | Quantidade de classes:${elemento.classList.lenght}`);
    });
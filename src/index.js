import _ from 'lodash';
import './style.css';
import image from './1.jpg'
function component(){
    let element = document.createElement('div')
    element.innerHTML = _.join(['hello','webpack'],' ')
    element.classList.add('hello')
    var newimage = new Image()
    newimage.src = image   
    newimage.className = 'imageStyle'
    element.appendChild(newimage)
    var btn = document.createElement('button')
    btn.innerHTML='click console'
    btn.onclick=()=>{
        import ('./another.js').then(mode=>{
            var print = mode.default
            print()
        })
    }
    element.appendChild(btn)
    return element
}
document.body.appendChild(component())
import {Select} from "./select/select";
import './select/style.scss'
const select = new Select('#select', {
    placeholder: 'Выберите элемент',
    selectedId: '3',
    data: [
        {id: '1', value: '1'},
        {id: '2', value: '2'},
        {id: '3', value: '3'},
        {id: '4', value: '4'},
        {id: '5', value: '5'}
    ],
    onSelect(item){
        console.log(item)
    }
})

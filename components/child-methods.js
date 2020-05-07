Vue.component('child-methods', {
    data () {
        return {
            cmpName: 'Child Methods CMP'
        }
    },
    methods: {
        showCmpName () {
            console.log("Llamada al método showCmpName", this.cmpName)
        }
    },
    template:`
        <div>
            <h2>Acceso a métodos del componente hijo desde el componente padre</h2>
         </div>    
    `
});
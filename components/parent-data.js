Vue.component('parent-data', {
    template:`
        <div>
            <h2>Acceso a datos del componente padre desde el componente hijo</h2>
            <p>{{ $parent.appName }}</p>
        </div>    
    `
});
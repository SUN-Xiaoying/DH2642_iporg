function Show({hash, children}){
    const [route,setRoute] = React.useState(window.location.hash);
    
    React.useEffect(function(){
        const listener = function(){ 
            setRoute(window.location.hash); 
        }
        window.addEventListener("hashchange", listener);
        return function(){
            window.removeEventListener("hashchange", listener);
        }
    },[]);

    return (
        <div class={route!= hash ? "hidden" : ""}>
            {children}
        </div>
    );
}
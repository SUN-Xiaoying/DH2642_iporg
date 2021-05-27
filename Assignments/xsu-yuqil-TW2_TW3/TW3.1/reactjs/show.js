
function Show({hash, children}){
    const [,setRoute] = React.useState(window.location.hash);
    React.useEffect(()=>{
        const onHashChange = ()=>{
            setRoute({});
        }
        window.addEventListener("hashchange", onHashChange);
        return window.removeEventListener("hashchange", onHashChange);
    },[]);
    return hash === window.location.hash ? children : false;
}
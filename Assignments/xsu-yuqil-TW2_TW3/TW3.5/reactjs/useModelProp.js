function useModelProp(model, prop) {
    const [propValue, setPropValue]= React.useState(model[prop]);

    React.useEffect(()=> {
        const obs = ()=>setPropValue(model[prop]);
        model.addObserver(obs)
        return function(){
            model.removeObserver(obs)
        };
    }, [model, prop]);
    return propValue;
}
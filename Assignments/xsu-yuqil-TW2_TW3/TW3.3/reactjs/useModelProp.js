function useModelProp(model, prop) {
    const [propValue, setPropValue]= React.useState(model[prop]);

    React.useEffect(()=> {
        const obs = ()=>setPropValue(model[prop]);
        return model.addObserver(obs);
    }, [model, prop]);
    return propValue;
}
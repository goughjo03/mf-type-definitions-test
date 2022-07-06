/// <reference types="react" />
declare module "mf_one/App" {
    import "./index.scss";
    interface Props {
        message?: string;
    }
    const App: ({ message }: Props) => JSX.Element;
    export default App;
}
declare module "mf_one/bootstrap" { }


import Typography from "./Components/TypographyMUI"
import ButtonMUI from "./Components/ButtonMUI"
import TextFieldMUI from "./Components/TextFieldMUI"
import FromInputMUI from "./Components/FromInputMUI"
import AppBarMUI from "./Components/AppBarMUI"
import ModelMUI from "./Components/ModelMUI"
import ContainerMUI from "./Components/ContainerMUI"
import ListsComponentsMUI from "./Components/ListsComponentsMUI"
import AccordMUI from "./Components/AccordMUI"
import DrowerMenuMUI from "./Components/DrowerMenuMUI"
import ResponsiveGridMUI from "./Components/ResponsiveGridMUI"

function App() {
    return (
    <>
  
    <AppBarMUI />
    <br />
    <ResponsiveGridMUI />
    <DrowerMenuMUI />
    <AccordMUI />
    <ListsComponentsMUI />
    <ContainerMUI />
    <ModelMUI />
    <Typography />
    <ButtonMUI />
    <br />
    <TextFieldMUI />
    <br />
    <FromInputMUI />
    </>
  )
}

export default App

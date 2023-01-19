import MainMenu from './MainMenu/MainMenu';
import menuItems from '../data/menuItems.json';
import ToggleButton from './ToggleButton/ToggleButton';

export const App = () => {
  return (
    <>
      <MainMenu items={menuItems} />
      <ToggleButton text = "Click me" type = "button"/>
    </>
  );
};

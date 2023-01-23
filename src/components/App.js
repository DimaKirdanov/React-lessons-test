import MainMenu from './MainMenu/MainMenu';
import menuItems from '../data/menuItems.json';
import ToggleButton from './ToggleButton/ToggleButton';
import Counter from './Counter/Counter';

export const App = () => {
  return (
    <>
      <MainMenu items={menuItems} />
      <ToggleButton text="Click me" type="button" />
      <Counter/>
    </>
  );
};

import MainNavigation from '../Navigation/MainNavigation/MainNavigation';

export default function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

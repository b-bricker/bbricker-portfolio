import { Outlet } from 'react-router-dom';

const Root = (): JSX.Element => (
  <>
    <div id="outlet">
      <p>Hi</p>
      <Outlet />
    </div>
  </>
);

export default Root;

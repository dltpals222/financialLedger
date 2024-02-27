import * as React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FirstRoutes from './routes/admin/first';
// import { pathType } from './public/types/Component';
// import RouteComponent from './public/components/routeComponent';

// const PAGE_LIST: pathType[] = [
//   {
//     path: 'first',
//   },
//   {
//     path: 'second',
//   },
// ];

const App = () => {
  return (
    <>
      <BrowserRouter>
        <FirstRoutes />
      </BrowserRouter>
    </>
  );
};
// 제대로 작동하는 것 확인 완료
// const App: React.FC = () => {
//   return (
//     <div>
//       <div>이거이거 어렵구마잉!</div>
//     </div>
//   );
// };

ReactDom.render(<App />, document.getElementById('root'));

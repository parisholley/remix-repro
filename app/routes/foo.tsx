import { Outlet } from '@remix-run/react';

export default function() {
  return (
    <div>
      foo
      <Outlet />
    </div>
  );
}

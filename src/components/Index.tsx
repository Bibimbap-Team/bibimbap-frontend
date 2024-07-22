import Changelog from './Changelog';

export default function Index() {
  return (
    <div className='grid grid-cols-12'>
      <div className='p-8 col-span-9'>
        <div>
          The mission of Polygon is to provide platform for creation of
          programming contest problems. Polygon supports the whole development
          cycle:
          <ul className='list-disc list-inside'>
            <li>problem statement writing</li>
            <li>test data preparing (generators supported)</li>
            <li>model solutions (including correct and wittingly incorrect)</li>
            <li>judging</li>
            <li>automatic validation</li>
          </ul>
        </div>
      </div>
      <div className='col-span-3 grid grid-rows-2 gap-4'>
        <div className='border border-primary rounded-md py-2 px-4 bg-primary w-full flex flex-col gap-2'>
          <p>Registered users: 12345</p>
          <p>Problems total: 12345</p>
          <p>Invokers waiting: 34</p>
        </div>
        <div className='border border-primary rounded-md py-2 px-4 bg-primary w-full flex flex-col gap-2'>
          <Changelog date='15 Jun 2024' content='Added a new feature' />
          <Changelog date='12 Jul 2014' content='Fixed a bug' />
          <Changelog date='27 Jun 2013' content='Initial release of the app' />
        </div>
      </div>
    </div>
  );
}

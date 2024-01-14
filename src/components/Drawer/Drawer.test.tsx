import { Drawer } from '.';
import { axeValidation } from '../../test/utils';

describe('<Drawer />', () => {
  axeValidation(
    <Drawer open onClose={() => {}}>
      <></>
    </Drawer>,
  );
});

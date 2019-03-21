import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
//tslint:disable-next-line:no-any
const globalAny: any = global;
globalAny.localStorage = localStorageMock;

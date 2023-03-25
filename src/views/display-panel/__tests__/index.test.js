import renderer from 'react-test-renderer';
import DisplayPanel from '../index';

describe("DisplayPanel Tests", () => {
    it('Matches DOM Snapshot', () => {
        const tree = renderer
            .create(<DisplayPanel userData={[]} userDataHandler={jest.fn}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});


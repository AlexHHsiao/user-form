import renderer from 'react-test-renderer';
import FormPanel from '../index';

describe("FormPanel Tests", () => {
    it('Matches DOM Snapshot', () => {
        const tree = renderer
            .create(<FormPanel setUpdateData={jest.fn} onSubmit={jest.fn}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});


import TagItemContainer from '../ui/TagItemContainer';
import TagItemSection from '../ui/TagItemSection';

export default function TagNew({text1, color, text2}) {
  return (
    <div className='container pt-5'>
      <TagItemContainer>
        <TagItemSection text={text1} color={color} onClick />
        <TagItemSection text={text2} color={color} onClick />
      </TagItemContainer>
    </div>
  );
}

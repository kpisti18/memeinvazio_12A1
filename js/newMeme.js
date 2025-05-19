const fileUpload = document.querySelector('#fileUpload');
let meme = null;


fileUpload.addEventListener('change', selectPic);


async function selectPic() {
    const file = fileUpload.files[0];
    console.log(file);
    
    if (file) {
        meme = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            const newMeme = document.querySelector('.newMeme');
            newMeme.style.backgroundImage = `url('${e.target.result}')`;
            newMeme.style.backgroundRepeat = 'no-repeat';
        }
        reader.readAsDataURL(file);
    }
}
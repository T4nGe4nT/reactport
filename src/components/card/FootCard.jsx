
// Image Imports
import faceBook from '../../assets/icons/facebook.svg'
import gitHub from '../../assets/icons/github.svg'
import instaGram from '../../assets/icons/instagram.svg'
import linkedIn from '../../assets/icons/linkedin.svg'

// Links as variables
const fb = "https://facebook.com"
const ig = "https://instagram.com"
const gh = "https://github.com"
const li = "https://linkedin.com"


// Image declarations
const fbImage = faceBook
const igImage = instaGram;
const ghImage = gitHub;
const linkedInImage = linkedIn;

export default function FootCard() {
    return (
        <>
            <hr />
        <div className="footCard">
            <a href={fb}><img src={fbImage} alt="Facebook Icon" /></a>
            <a href={ig}><img src={igImage} alt="Instagram Icon" /></a>
            <a href={gh}><img src={ghImage} alt="Git Hub Icon" /></a>
            <a href={li}><img src={linkedInImage} alt="Linked In Image"/></a>
        </div>
        </>
    )

}
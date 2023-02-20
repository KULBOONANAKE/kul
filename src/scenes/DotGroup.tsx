import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  selectedPage: string
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>
}

const DotGroup = ({ selectedPage, setSelectedPage }: Props) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === 'home' ? selectedStyles : 'bg-dark-gray'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        href="#experience"
        className={`${
          selectedPage === 'skills' ? selectedStyles : 'bg-dark-gray'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('skills')}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === 'projects' ? selectedStyles : 'bg-dark-gray'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('projects')}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === 'contact' ? selectedStyles : 'bg-dark-gray'
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage('contact')}
      />
    </div>
  )
}

export default DotGroup

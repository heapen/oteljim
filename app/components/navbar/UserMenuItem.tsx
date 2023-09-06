'use client'

interface UserMenuItem {
    name: string,
    onClick: () => void
}

const UserMenuItem:React.FC<UserMenuItem> = ({
    name,
    onClick
}) => {
  return (
    <div onClick={onClick} className="openmenu-user">
      {name}
    </div>
  )
}

export default UserMenuItem

import { useEffect, useState } from 'react'
import { useTweaks } from 'use-tweaks'

function Tweak({ update, data }) {
  const [name] = useState(data.id)
  const tweakedData = useTweaks(name, data)
  useEffect(() => {
    update(tweakedData)
  }, [tweakedData, update])
  return null
}

export default Tweak

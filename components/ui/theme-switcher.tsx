'use client'
import { Switch } from "@nextui-org/react";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher(){

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    
    useEffect(() => {
      setMounted(true)
    }, [])

    if(!mounted) return null

    return(
        <Switch
        defaultSelected={theme==='dark'?true:false}
        size="sm"
        onClick={() => setTheme(theme==='dark'?'light':'dark')}
        startContent={<Sun />}
        endContent={<Moon />}
        className=" text-nowrap"
      >
      </Switch>
    )
}
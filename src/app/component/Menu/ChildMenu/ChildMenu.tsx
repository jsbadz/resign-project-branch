import "@/app/component/Menu/ChildMenu/ChildMenu.css"
import { ChildMenuProps, DropdownProps, MenuItemProps } from "@/app/interfaces"
import Link from "next/link"
import { useState } from "react"
import { Button } from "../.."

const COLLAPSECLASS: DropdownProps = {
  hover: {
    active: "dropdown-menu",
    inactive: "dropdown-menu",
  },
  click: { active: "dropdown-menu-clicked", inactive: "dropdown-menu-click" },
}

const childPosition = {
  left: "left-full",
  right: "right-full",
}

export default function ChildMenu(props: ChildMenuProps) {
  const {
    parentKey,
    items,
    className,
    collapsePosition = "left",
    collapseAction = "hover",
    activeParent,
  } = props

  const [collapsedMenu, setCollapsedMenu] = useState<
    string | number | undefined
  >()
  const renderItemHandler = (element: MenuItemProps) => {
      console.log(element.type, 'element.type')
    switch (element.type.toLowerCase()) {
      case "link":
        return (
          <Link href={element.url}>
            <span>{element.label}</span>
          </Link>
        )

      case "button":
        return (
          <Button
            className=""
            label={element.label}
            onClick={() => {
              if (collapsedMenu === element.key) {
                setCollapsedMenu(undefined)

                return
              }

              setCollapsedMenu(element.key)
            }}
          />
        )

      default:
        break
    }
  }

  return (
    <div
      className={`${
        activeParent === parentKey
          ? COLLAPSECLASS[collapseAction].active
          : COLLAPSECLASS[collapseAction].inactive
      } absolute top-[130%] bg-white text-black ${className ?? ""}`}
    >
      {items.map((elem: MenuItemProps, index: number) => {
        return (
          <div
            className={`dropdown relative p-3 ${
              elem.className ?? "hover:underline hover:underline-offset-8"
            }`}
            key={index}
          >
            {renderItemHandler(elem)}
            {/* <Link href={elem.url}>
              <span>{elem.label}</span>
            </Link> */}
            {elem.children ? (
              <ChildMenu
                parentKey={elem.key}
                activeParent={collapsedMenu}
                items={elem.children}
                className={`${childPosition[collapsePosition]} ${
                  className ?? ""
                }`}
                collapseAction={collapseAction}
                collapsePosition={collapsePosition}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
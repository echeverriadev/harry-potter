import { NextPage } from 'next'
import {Card,Button, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";

interface Props {
  name: string,
  house: string,
  img: string,
}

export const CardCharacter: NextPage<Props> = ({name, house, img}) => {
  return (
    <h4>HELLOOOO</h4>
  )
}

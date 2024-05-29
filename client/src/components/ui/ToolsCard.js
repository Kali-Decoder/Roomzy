import { Button, Card, CardBody, Image } from "@nextui-org/react";
import React from "react";

export default function ToolsCard({ src, isBlack = false, title }) {
  return (
    <Card
      isPressable
      className={
        isBlack
          ? `shadow-[0px_5px_0px_0px_#E8E8E8]`
          : `shadow-[0px_5px_0px_0px_#1a202c]`
      }
      id="singleCardTool"
      style={{
        border: "1px solid #1a202c",
        width: 300,
        height: 146,
        padding: 4,
      }}
    >
      <CardBody
        style={{ background: isBlack ? "#202020" : "white" }}
        className="overflow-visible py-2"
      >
        <h3
          className="text-2xl font-bold p-[4px]"
          style={{
            maxWidth: 190,
            color: isBlack ? "white" : "black",
          }}
        >
          {title}
        </h3>
        <div className="flex items-center">
          <div className="w-1/2 self-end">
            {/* <Button variant="light" style={{ color: isBlack ? "white" : "" }}>
              Launch
            </Button> */}
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <Image
              style={{
                maxHeight: 82,
                height: "100%",
                maxWidth: 137,
                display: "block",
                paddingBottom: 4,
              }}
              className="object-cover rounded-xl"
              src={src}
            ></Image>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

import { useState } from "react";
import { Text } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { ComponentDataType } from "../types";

type NewsComponentProps = {
  data: ComponentDataType;
};

export const NewsComponent = (props: NewsComponentProps) => {
  const { data } = props;
  const { picture, header, body, isExpandable, expandableText, CTA } = data;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card onPress={() => setIsExpanded(true)}>
      <Card.Title title={header} subtitle={body} />
      <Card.Content>
        <Title>{header}</Title>
        <Paragraph>{body}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: picture }} />
      {isExpanded && isExpandable && (
        <Card.Actions>
          <Button onPress={() => setIsExpanded(false)}>OK</Button>
        </Card.Actions>
      )}
    </Card>
  );
};

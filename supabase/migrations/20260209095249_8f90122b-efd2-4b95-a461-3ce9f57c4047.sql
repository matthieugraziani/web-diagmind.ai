-- Add UPDATE and DELETE policies for chat_messages
-- Users can only update/delete messages in their own conversations

CREATE POLICY "Users can update messages in their conversations" 
ON public.chat_messages 
FOR UPDATE 
USING (EXISTS ( 
  SELECT 1 FROM chat_conversations 
  WHERE chat_conversations.id = chat_messages.conversation_id 
  AND chat_conversations.user_id = auth.uid()
));

CREATE POLICY "Users can delete messages in their conversations" 
ON public.chat_messages 
FOR DELETE 
USING (EXISTS ( 
  SELECT 1 FROM chat_conversations 
  WHERE chat_conversations.id = chat_messages.conversation_id 
  AND chat_conversations.user_id = auth.uid()
));
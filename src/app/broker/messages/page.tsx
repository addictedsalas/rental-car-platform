"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// Mock data for conversations
const mockConversations = [
  {
    id: "1",
    customerName: "John Smith",
    customerEmail: "john.smith@example.com",
    avatar: "/avatars/avatar-1.jpg",
    lastMessage: "I'd like to extend my rental for 2 more days if possible.",
    timestamp: "10:23 AM",
    unread: true,
    messages: [
      { id: "m1", sender: "customer", content: "Hello, I'm interested in renting the Toyota Camry for next week.", timestamp: "Yesterday, 9:15 AM" },
      { id: "m2", sender: "broker", content: "Hi John, the Camry is available. When exactly do you need it?", timestamp: "Yesterday, 9:30 AM" },
      { id: "m3", sender: "customer", content: "From Monday to Friday. Is that possible?", timestamp: "Yesterday, 9:45 AM" },
      { id: "m4", sender: "broker", content: "Yes, that works. I'll prepare the paperwork.", timestamp: "Yesterday, 10:00 AM" },
      { id: "m5", sender: "customer", content: "I'd like to extend my rental for 2 more days if possible.", timestamp: "Today, 10:23 AM" },
    ]
  },
  {
    id: "2",
    customerName: "Emily Johnson",
    customerEmail: "emily.j@example.com",
    avatar: "/avatars/avatar-2.jpg",
    lastMessage: "Thank you for the quick response!",
    timestamp: "Yesterday",
    unread: false,
    messages: [
      { id: "m1", sender: "customer", content: "Hi, do you have any SUVs available for this weekend?", timestamp: "2 days ago, 3:15 PM" },
      { id: "m2", sender: "broker", content: "Hello Emily, yes we have a Honda CR-V and a Toyota RAV4 available.", timestamp: "2 days ago, 3:30 PM" },
      { id: "m3", sender: "customer", content: "Great! How much would the RAV4 cost for Sat-Sun?", timestamp: "2 days ago, 3:45 PM" },
      { id: "m4", sender: "broker", content: "The RAV4 would be $75 per day, so $150 total plus taxes and fees.", timestamp: "2 days ago, 4:00 PM" },
      { id: "m5", sender: "customer", content: "Thank you for the quick response!", timestamp: "Yesterday, 10:23 AM" },
    ]
  },
  {
    id: "3",
    customerName: "Michael Brown",
    customerEmail: "michael.b@example.com",
    avatar: "/avatars/avatar-3.jpg",
    lastMessage: "Is the deposit refundable?",
    timestamp: "Mar 15",
    unread: false,
    messages: [
      { id: "m1", sender: "customer", content: "Hello, I'm looking at the Honda Civic listing.", timestamp: "Mar 15, 1:15 PM" },
      { id: "m2", sender: "broker", content: "Hi Michael, the Civic is one of our most popular models. How can I help?", timestamp: "Mar 15, 1:30 PM" },
      { id: "m3", sender: "customer", content: "What's the security deposit amount?", timestamp: "Mar 15, 1:45 PM" },
      { id: "m4", sender: "broker", content: "The security deposit is $200.", timestamp: "Mar 15, 2:00 PM" },
      { id: "m5", sender: "customer", content: "Is the deposit refundable?", timestamp: "Mar 15, 2:15 PM" },
    ]
  },
  {
    id: "4",
    customerName: "Sarah Wilson",
    customerEmail: "sarah.w@example.com",
    avatar: "/avatars/avatar-4.jpg",
    lastMessage: "Perfect, I'll see you then!",
    timestamp: "Mar 12",
    unread: false,
    messages: [
      { id: "m1", sender: "customer", content: "Hi, I have a reservation for tomorrow but need to change the pickup time.", timestamp: "Mar 12, 11:15 AM" },
      { id: "m2", sender: "broker", content: "Hello Sarah, what time would work better for you?", timestamp: "Mar 12, 11:30 AM" },
      { id: "m3", sender: "customer", content: "Could I pick up at 3pm instead of noon?", timestamp: "Mar 12, 11:45 AM" },
      { id: "m4", sender: "broker", content: "Yes, I've updated your reservation for 3pm pickup.", timestamp: "Mar 12, 12:00 PM" },
      { id: "m5", sender: "customer", content: "Perfect, I'll see you then!", timestamp: "Mar 12, 12:15 PM" },
    ]
  },
];

// Message component
const Message = ({ message }: { message: any }) => {
  const isBroker = message.sender === "broker";
  
  return (
    <div className={`flex ${isBroker ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[70%] ${isBroker ? 'bg-gray-700' : 'bg-blue-600'} rounded-lg px-4 py-2`}>
        <p className="text-white">{message.content}</p>
        <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
      </div>
    </div>
  );
};

export default function MessagesPage() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("broker");
  const [conversations, setConversations] = useState(mockConversations);
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleUserTypeChange = (newUserType: "customer" | "broker" | "admin") => {
    setUserType(newUserType);
  };
  
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        const newMsg = {
          id: `m${conv.messages.length + 1}`,
          sender: "broker",
          content: newMessage,
          timestamp: "Just now"
        };
        return {
          ...conv,
          lastMessage: newMessage,
          timestamp: "Just now",
          messages: [...conv.messages, newMsg]
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setSelectedConversation(updatedConversations.find(c => c.id === selectedConversation.id)!);
    setNewMessage("");
  };
  
  const filteredConversations = searchTerm 
    ? conversations.filter(conv => 
        conv.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        conv.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : conversations;
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage="Messages" onUserTypeChange={handleUserTypeChange} />
        
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">Messages</h2>
          
          <div className="flex h-[calc(100vh-180px)] bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-700">
              <div className="p-4 border-b border-gray-700">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full bg-gray-700 text-white border-0 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-64px)]">
                {filteredConversations.map((conversation) => (
                  <div 
                    key={conversation.id}
                    className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-750 ${selectedConversation.id === conversation.id ? 'bg-gray-750' : ''}`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full bg-gray-600 mr-3 overflow-hidden">
                        {/* Placeholder for avatar */}
                        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                          {conversation.customerName.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium truncate">{conversation.customerName}</h3>
                          <span className="text-xs text-gray-400">{conversation.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-400 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread && (
                        <div className="ml-2 h-3 w-3 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
                
                {filteredConversations.length === 0 && (
                  <div className="p-4 text-center text-gray-400">
                    No conversations found
                  </div>
                )}
              </div>
            </div>
            
            {/* Conversation Detail */}
            <div className="w-2/3 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Conversation Header */}
                  <div className="p-4 border-b border-gray-700 flex items-center">
                    <div className="relative h-10 w-10 rounded-full bg-gray-600 mr-3 overflow-hidden">
                      {/* Placeholder for avatar */}
                      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                        {selectedConversation.customerName.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">{selectedConversation.customerName}</h3>
                      <p className="text-xs text-gray-400">{selectedConversation.customerEmail}</p>
                    </div>
                  </div>
                  
                  {/* Messages */}
                  <div className="flex-1 p-4 overflow-y-auto">
                    {selectedConversation.messages.map((message) => (
                      <Message key={message.id} message={message} />
                    ))}
                  </div>
                  
                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-700">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-700 text-white border-0 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button
                        className="bg-blue-600 hover:bg-blue-500 text-white rounded-r-lg px-4 py-2 transition-colors"
                        onClick={handleSendMessage}
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-400">Select a conversation to start messaging</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

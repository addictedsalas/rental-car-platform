"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

// Mock data for conversations
const mockConversations = [
  {
    id: "1",
    brokerName: "StarCar Rentals",
    brokerEmail: "support@starcar.com",
    avatar: "/avatars/broker-1.jpg",
    lastMessage: "Yes, that works. I'll prepare the paperwork.",
    timestamp: "10:00 AM",
    unread: false,
    messages: [
      { id: "m1", sender: "customer", content: "Hello, I'm interested in renting the Toyota Camry for next week.", timestamp: "Yesterday, 9:15 AM" },
      { id: "m2", sender: "broker", content: "Hi John, the Camry is available. When exactly do you need it?", timestamp: "Yesterday, 9:30 AM" },
      { id: "m3", sender: "customer", content: "From Monday to Friday. Is that possible?", timestamp: "Yesterday, 9:45 AM" },
      { id: "m4", sender: "broker", content: "Yes, that works. I'll prepare the paperwork.", timestamp: "Yesterday, 10:00 AM" },
    ]
  },
  {
    id: "2",
    brokerName: "LuxDrive",
    brokerEmail: "bookings@luxdrive.com",
    avatar: "/avatars/broker-2.jpg",
    lastMessage: "The Mercedes E-Class is available for your requested dates.",
    timestamp: "Yesterday",
    unread: true,
    messages: [
      { id: "m1", sender: "customer", content: "Do you have any luxury vehicles available for a business trip?", timestamp: "2 days ago, 2:15 PM" },
      { id: "m2", sender: "broker", content: "We have several options. What dates are you looking at?", timestamp: "2 days ago, 2:30 PM" },
      { id: "m3", sender: "customer", content: "March 25-28. Preferably a Mercedes if available.", timestamp: "2 days ago, 2:45 PM" },
      { id: "m4", sender: "broker", content: "The Mercedes E-Class is available for your requested dates.", timestamp: "Yesterday, 9:00 AM" },
    ]
  },
  {
    id: "3",
    brokerName: "EcoDrive Rentals",
    brokerEmail: "help@ecodrive.com",
    avatar: "/avatars/broker-3.jpg",
    lastMessage: "We've credited your account with a 10% discount for your next rental.",
    timestamp: "Mar 14",
    unread: false,
    messages: [
      { id: "m1", sender: "customer", content: "I had an issue with the hybrid vehicle I rented last week.", timestamp: "Mar 14, 11:15 AM" },
      { id: "m2", sender: "broker", content: "I'm sorry to hear that. Could you provide more details?", timestamp: "Mar 14, 11:30 AM" },
      { id: "m3", sender: "customer", content: "The battery wasn't holding charge well, which limited the electric range.", timestamp: "Mar 14, 11:45 AM" },
      { id: "m4", sender: "broker", content: "Thank you for letting us know. We'll have our maintenance team check it.", timestamp: "Mar 14, 12:00 PM" },
      { id: "m5", sender: "broker", content: "We've credited your account with a 10% discount for your next rental.", timestamp: "Mar 14, 12:15 PM" },
    ]
  },
];

// Message component
const Message = ({ message }: { message: any }) => {
  const isCustomer = message.sender === "customer";
  
  return (
    <div className={`flex ${isCustomer ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] ${isCustomer ? 'bg-blue-600' : 'bg-gray-700'} rounded-lg px-4 py-2`}>
        <p className="text-white">{message.content}</p>
        <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
      </div>
    </div>
  );
};

export default function CustomerMessagesPage() {
  const [userType, setUserType] = useState<"customer" | "broker" | "admin">("customer");
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
          sender: "customer",
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
        conv.brokerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        conv.brokerEmail.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : conversations;
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userType={userType} />
      
      <div className="flex">
        <Sidebar userType={userType} activePage="Messages" onUserTypeChange={handleUserTypeChange} />
        
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">My Messages</h2>
          
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
                          {conversation.brokerName.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium truncate">{conversation.brokerName}</h3>
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
                        {selectedConversation.brokerName.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">{selectedConversation.brokerName}</h3>
                      <p className="text-xs text-gray-400">{selectedConversation.brokerEmail}</p>
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
